import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redisConfigured = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);

const instance = redisConfigured
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "rentguard:waitlist",
    })
  : null;

type RateLimitResult = Awaited<ReturnType<NonNullable<typeof instance>["limit"]>>;

export async function enforceRateLimit(identifier: string): Promise<RateLimitResult> {
  if (!instance) {
    return {
      success: true,
      pending: 0,
      limit: 0,
      remaining: 0,
      reset: 0,
    } as RateLimitResult;
  }

  return instance.limit(identifier);
}

export function isRateLimitEnabled() {
  return Boolean(instance);
}
