import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee (21st.dev-style). Content is rendered twice for a seamless loop;
 * the copy is hidden from screen readers. Pauses on hover/focus, stops under reduced motion.
 */
export function Marquee({
  children,
  reverse = false,
  duration = "30s",
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
