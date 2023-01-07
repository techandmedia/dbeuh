import { Auth } from '@supabase/ui';
import { supabase } from '../utils/supabase';

export default function Page() {
  const { user } = Auth.useUser();
  console.log('user', user);

  return (
    <div className="w-full h-full bg-gray-300">
      {!user ? (
        <div className="w-full h-full flex justify-center items-center p-4">
          <div>
            <Auth
              supabaseClient={supabase}
              //   providers={['google', 'github']}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full flex flex-col justify-center items-center p-4"
          style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
        >
          {/* <TodoList user={supabase.auth.user()} /> */}
          <button
            className="btn-black w-full mt-12"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.log('Error logging out:', error.message);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
