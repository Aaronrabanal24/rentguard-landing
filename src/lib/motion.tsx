import {
  createElement,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

interface MotionOptions {
  delay?: number;
  duration?: number;
  ease?: unknown;
}

interface MotionProps {
  initial?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: MotionOptions;
}

type MotionComponent<T extends ElementType> = (props: ComponentPropsWithoutRef<T> & MotionProps) => ReactElement;

const transitionKeys = new Set(["initial", "whileInView", "viewport", "transition"]);

function createMotionComponent<T extends ElementType>(tag: T) {
  const Component = forwardRef<HTMLElement, ComponentPropsWithoutRef<T> & MotionProps>(
    ({ className, transition, ...rest }, ref) => {
      const localRef = useRef<HTMLElement | null>(null);
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        const node = localRef.current;
        if (!node) return;

        setIsVisible(false);
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
      }, []);

      const cleanedProps = useMemo(() => {
        const clone: Record<string, unknown> = {};
        Object.entries(rest).forEach(([key, value]) => {
          if (!transitionKeys.has(key)) {
            clone[key] = value;
          }
        });
        return clone;
      }, [rest]);

      const mergedRef = (node: HTMLElement | null) => {
        localRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as { current: HTMLElement | null }).current = node;
        }
      };

      const delay = transition?.delay ? `${transition.delay}s` : undefined;

      const { style: inlineStyle, ...elementProps } = cleanedProps as Record<string, unknown>;

      return createElement(tag, {
        ref: mergedRef,
        className: cn("motion-reveal", isVisible && "motion-reveal-visible", className),
        style: {
          transitionDelay: delay,
          ...(inlineStyle as Record<string, unknown>),
        },
        ...elementProps,
      });
    }
  );

  Component.displayName = `Motion(${typeof tag === "string" ? tag : "Component"})`;
  return Component as unknown as MotionComponent<T>;
}

type MotionRegistry = Record<string, MotionComponent<ElementType>>;

export const motion = new Proxy({} as MotionRegistry, {
  get(_target, prop: string) {
    return createMotionComponent(prop as ElementType);
  },
});
