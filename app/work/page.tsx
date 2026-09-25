import { redirect } from 'next/navigation';
import { getAvailableWorkTypes, workTypeSlugs } from '@/lib/work';

export default function WorkPage() {
  const [firstType] = getAvailableWorkTypes();
  redirect(`/work/${workTypeSlugs[firstType]}`);
}
