export function ErrorPage() {
  return (
    <div className="flex items-center dark:text-white">
      Could not Load the page. Please&nbsp;
      <button className="text-blue-400 underline" onClick={() => window.location.reload()}>
        Reload
      </button>
      !
    </div>
  );
}
