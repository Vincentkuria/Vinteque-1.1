export enum funnelType {
  INBOUND,
  OUTBOUND,
  INOUTBOUND,
}

export type Stage = {
  id: string;
  name: string;
  funnel: funnelType;
};

export type Comment = {
  id: string;
  text: string;
  dateTime: string;
};

export type StageComments = {
  stageId: string;
  stageName: string;
  comments: Comment[];
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  source: string;
  funnel: funnelType;
  comments: StageComments[];
  currentStage: string;
  dateAdded: string;
  lastContacted: string;
  updated_at: string;
};