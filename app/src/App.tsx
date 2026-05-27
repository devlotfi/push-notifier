import Navbar from "./components/navbar";
import NotificationsSettings from "./components/settings/notifications-settings";

export default function App() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar></Navbar>

      <div className="flex flex-1 flex-col overflow-y-auto max-h-[100dvh-5rem-2rem] items-center p-[1rem]">
        <div className="flex flex-1 flex-col justify-center w-full max-w-screen-sm pb-[5rem]">
          <NotificationsSettings></NotificationsSettings>
        </div>
      </div>
    </div>
  );
}
