import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Box paddingRight={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
