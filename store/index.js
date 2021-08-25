export const state = () => ({
  option: ["A","B"][Math.floor(Math.random() * ["A", "B"].length)],
  selection: "HOME"
});
   
export const mutations = {
 CHANGE_ADMIN_SELECTION(state, selection) {
   state.selection = selection;
 }
}