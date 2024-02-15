'use client';
import Input from '@/components/ui/input';
import useSearch from '@/hooks/use-search';
import { SearchType } from '@/types';

interface InputProps {
  placeholder: string;
  className?: string;
  autoFocus?: boolean;
}

export default function Search(props: InputProps) {
  const { defaultValue, onChange } = useSearch({ name: SearchType.name });
  return (
    <Input
      type="search"
      name={SearchType.name}
      defaultValue={defaultValue}
      onChange={onChange}
      {...props}
    />
  );
}
