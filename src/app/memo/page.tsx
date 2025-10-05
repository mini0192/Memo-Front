import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export default function MemoPage() {
  return (
    <div className="container flex flex-col gap-6">
      <h2>Memo</h2>
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Standard styling with subtle background and borders.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button className="min-w-[100px]" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
