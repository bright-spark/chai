import { ChaiBlock } from "./ChaiBlock";
import React, { ReactNode } from "react";
import { ChaiPage, PredefinedBlock } from "./index";

interface UILibrary {
  name: string;
  uuid: string;
}

interface Block {
  type: string;
  [key: string]: any;
}

type ReactComponentType = React.ComponentType<any>;

type Breakpoint = {
  title: string;
  content: string;
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | string;
  icon: React.ReactNode | Element;
  width: number;
};

type SavePageData = {
  blocks: ChaiBlock[];
  providers?: DataProvider[];
  brandingOptions?: Record<string, any>;
};

type DataProvider = { providerKey: string; args: Record<string, any> };

type OutlineMenuItem = {
  item: React.ComponentType<{ blockId: string }>;
  tooltip: string | ReactNode;
};
type OutlineMenuItems = OutlineMenuItem[];
type TimeInSeconds = number;
export type AskAiResponse = {
  blocks?: Array<{ _id: string } & Partial<ChaiBlock>>;
  usage?: Record<any, number>;
  error?: any;
};

export interface ChaiBuilderEditorProps {
  htmlDir?: "ltr" | "rtl";
  hideSaveButton?: boolean;
  filterChaiBlock?: (block: any) => boolean;
  showDebugLogs?: boolean;
  autoSaveSupport?: boolean;
  autoSaveInterval?: TimeInSeconds;
  breakpoints?: Breakpoint[];
  editable?: boolean;

  loading?: boolean;

  locale?: string;

  nonEditableComponent?: ReactComponentType;

  canvas?: React.FC<any>;
  canvasTopBarComponents?: { right?: ReactComponentType[] };

  previewLink?: string;

  dataBindingSupport?: boolean;
  dataProviders?: DataProvider[];

  darkMode?: boolean;

  dndOptions?: any;

  importHTMLSupport?: boolean;

  fetchMediaCallback?: (limit?: number, offset?: number) => Promise<any[]>;
  uploadMediaCallback?: (file: File) => Promise<{ url: string }>;
  askAiCallBack?: (prompt: string, blocks: ChaiBlock[]) => Promise<AskAiResponse>;
  saveAiContextCallback?: (content: string) => Promise<true | Error>;
  aiContext?: string;

  getExternalPredefinedBlock?: (
    block: PredefinedBlock,
  ) => Promise<PredefinedBlock & { blocks: ChaiBlock[]; html: string }>;
  getUILibraryBlocks?: (libraryUuid: string) => Promise<PredefinedBlock[]>;
  uiLibraries?: UILibrary[];

  subPages?: Block[];
  subPagesSupport?: boolean;

  blocks?: ChaiBlock[];
  onSaveBlocks?: ({ blocks, providers }: any) => Promise<any>; // deprecated
  onSavePage?: ({ blocks, providers }: SavePageData) => Promise<boolean | Error>; // deprecated
  onSave?: ({ blocks, providers }: SavePageData) => Promise<boolean | Error>;

  brandingOptions?: Record<string, string>;
  onSaveBrandingOptions?: (brandingOptions: Record<string, any>) => Promise<boolean | Error>; // deprecated

  onSaveStateChange?: (syncStatus: "UNSAVED" | "SAVED" | "SAVING") => void;

  previewComponent?: ReactComponentType;

  sideBarComponents?: {
    bottom?: ReactComponentType[];
    top?: { icon: ReactComponentType | string; name: string; panel: ReactComponentType }[];
  };

  topBarComponents?: {
    center?: ReactComponentType[];
    left?: ReactComponentType[];
    right?: ReactComponentType[];
  };

  outlineMenuItems?: OutlineMenuItems;

  getPages?: () => Promise<ChaiPage[]>;

  unsplashAccessKey?: string;
  _flags?: Record<string, boolean>;
}
