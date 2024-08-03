/**
 * Hook to manage the state of a dialog using URL search parameters.
 * @param {string} [dialogId = 'dialog'] - The ID of the dialog, defaults to 'dialog'.
 * @param {Object} [options] - Additional options.
 * @param {string[]} [options.nestedDialogIds] - The IDs of nested dialogs, if any. This ensures that nested dialogs are closed when the parent dialog is closed.
 */
export function useDialogWithSearchParams(
  dialogId = "dialog",
  { nestedDialogIds = [] } = {}
) {
  const { searchParams, setSearchParam, clearSearchParams } =
    useSearchParamsV2();

  // Check if the dialog should be open. This assumes the dialog parameter is 'dialogId=open'.
  const open = searchParams.get(dialogId) === "open";

  // Function to open the dialog by setting the appropriate URL search parameter.
  function onOpen() {
    if (!open) {
      setSearchParam(dialogId, "open");
    }
  }

  // Function to close the dialog by removing the dialog parameter from the URL.
  function onClose() {
    clearSearchParams([dialogId, ...nestedDialogIds]);
  }

  return {
    open,
    onOpen,
    onClose,
  };
}
