import React, { ComponentPropsWithRef, useCallback, useSyncExternalStore } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

const EMPTY_SCROLL_SNAPS: number[] = [];

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const subscribe = useCallback((onChange: () => void) => {
    if (!emblaApi) return () => {};
    emblaApi.on('select', onChange).on('reInit', onChange);
    return () => {
      emblaApi.off('select', onChange).off('reInit', onChange);
    };
  }, [emblaApi]);
  const getSelectedIndex = useCallback(() => emblaApi?.selectedScrollSnap() ?? 0, [emblaApi]);
  const getScrollSnaps = useCallback(() => emblaApi?.scrollSnapList() ?? EMPTY_SCROLL_SNAPS, [emblaApi]);
  const selectedIndex = useSyncExternalStore(subscribe, getSelectedIndex, () => 0);
  const scrollSnaps = useSyncExternalStore(subscribe, getScrollSnaps, () => EMPTY_SCROLL_SNAPS);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const DotButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
