import { create } from "zustand";
import { BearSlice, createBearSlice } from "./bearSlice";

export const useBoundStore = create<BearSlice>()((...a) => ({
  ...createBearSlice(...a),
}));
