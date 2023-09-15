import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from '~/utils';

export default function HEADER() {
  const user = useOptionalUser();

  return (

    <div className="container navbar space-x-4 pl-4 pr-4 sm:justify-between sm:space-x-0">
      <div className="navbar-start">
        <div className="px-2 mx-2 navbar-start">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Fitness Blueprint</h1>
            <div className="hidden lg:block">
              <div className="flex items-center">
                <div className="divider divider-horizontal"></div>
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                  All Tools
                </Link>
                        
                <Link to="/Blog" className="btn btn-ghost btn-sm rounded-btn">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/profile" className="btn btn-ghost btn-sm rounded-btn">
              Profile
            </Link>

            <Form action="/logout" method="post">
              <button type="submit" className="btn btn-ghost btn-sm rounded-btn">
                Logout
              </button>
            </Form>
          </>
        ) : (
          <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

