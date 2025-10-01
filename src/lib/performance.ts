/**
 * Performance monitoring utilities for tracking Web Vitals and custom metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
}

/**
 * Log performance metrics to console in development
 * In production, these could be sent to an analytics service
 */
export function logPerformanceMetric(metric: PerformanceMetric): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `[Performance] ${metric.name}:`,
      Math.round(metric.value),
      'ms',
      `(${metric.rating})`
    );
  }

  // In production, you could send to analytics:
  // if (process.env.NODE_ENV === 'production') {
  //   window.plausible?.('Performance', {
  //     props: {
  //       metric: metric.name,
  //       value: Math.round(metric.value),
  //       rating: metric.rating,
  //     },
  //   });
  // }
}

/**
 * Get rating based on Web Vitals thresholds
 */
export function getWebVitalRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, [number, number]> = {
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    FID: [100, 300],
    INP: [200, 500],
    LCP: [2500, 4000],
    TTFB: [800, 1800],
  };

  const [goodThreshold, poorThreshold] = thresholds[name] || [0, 0];

  if (value <= goodThreshold) return 'good';
  if (value <= poorThreshold) return 'needs-improvement';
  return 'poor';
}

/**
 * Measure page load performance
 */
export function measurePageLoad(): void {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (!perfData) return;

    const metrics = {
      dns: perfData.domainLookupEnd - perfData.domainLookupStart,
      tcp: perfData.connectEnd - perfData.connectStart,
      ttfb: perfData.responseStart - perfData.requestStart,
      download: perfData.responseEnd - perfData.responseStart,
      domInteractive: perfData.domInteractive - perfData.fetchStart,
      domComplete: perfData.domComplete - perfData.fetchStart,
      loadComplete: perfData.loadEventEnd - perfData.fetchStart,
    };

    if (process.env.NODE_ENV === 'development') {
      console.group('[Performance] Page Load Metrics');
      console.table(metrics);
      console.groupEnd();
    }
  });
}

/**
 * Measure custom timing
 */
export function measureCustomTiming(name: string, startTime: number): void {
  const duration = performance.now() - startTime;

  logPerformanceMetric({
    name,
    value: duration,
    rating: duration < 1000 ? 'good' : duration < 3000 ? 'needs-improvement' : 'poor',
  });
}

/**
 * Mark a performance timing point
 */
export function markPerformance(name: string): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
}

/**
 * Measure between two performance marks
 */
export function measurePerformance(name: string, startMark: string, endMark: string): void {
  if (typeof window === 'undefined') return;

  try {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name, 'measure')[0];

    if (measure) {
      logPerformanceMetric({
        name,
        value: measure.duration,
        rating: measure.duration < 1000 ? 'good' : measure.duration < 3000 ? 'needs-improvement' : 'poor',
      });
    }
  } catch {
    // Marks may not exist, silently fail
  }
}
