import { ContentFlow, ContentItem } from "./types";

class InMemoryContentManager {
  private content = new Map<string, ContentItem>();
  private flows = new Map<string, ContentFlow>();

  registerContent(items: ContentItem[]) {
    items.forEach((item) => {
      this.content.set(item.id, item);
    });
  }

  registerFlows(items: ContentFlow[]) {
    items.forEach((flow) => {
      this.flows.set(flow.id, flow);
    });
  }

  getContent<T extends ContentItem["content"]>(id: string): T | null {
    const item = this.content.get(id);
    return (item?.content as T) ?? null;
  }

  getFlow(id: string): ContentFlow | null {
    return this.flows.get(id) ?? null;
  }
}

export const ContentManager = new InMemoryContentManager();
