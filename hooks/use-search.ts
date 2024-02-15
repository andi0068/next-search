import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export interface UseSearchProps {
  name: string;
}

export default function useSearch({ name }: UseSearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultValue = searchParams.get(name) || '';

  const onChange = useDebouncedCallback(function onChange<T extends { value: string }>(
    event: React.ChangeEvent<T>,
  ) {
    const params = new URLSearchParams(searchParams);
    const { value } = event.target;

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    router.replace(`${pathname}?${params.toString()}`);
  },
  300);

  return {
    defaultValue,
    onChange,
  } as const;
}
