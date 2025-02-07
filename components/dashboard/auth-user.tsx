import { auth } from '@/lib/auth.ts';
import { User } from './user.tsx';

export async function AuthUser() {
  const session = await auth();
  return <User user={session?.user} />;
}
