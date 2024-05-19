import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string
}

export default function SortSelector({onSelectSortOrder, sortOrder}: Props) {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: '-name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton marginBottom={4} rightIcon={<BsChevronDown />} as={Button}>
        Order By: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order=> <MenuItem onClick={() => onSelectSortOrder(order.value)} value={order.value} key={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}
