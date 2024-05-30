import { TableBody, TD } from "./Tables";
import {
  addDecimalNumber,
  concatCityState,
  convertDateToDateFormat,
  convertTrailertoInitial,
  roundUpTwoDigits,
} from "../utils/helper.js";
import styled from "styled-components";
import { useCallback, useState } from "react";

const TableRowData = ({ data }) => {
  const [indexRow, setIndexRow] = useState();
  const [itemRow, setItemRow] = useState();


  // React Native functions
	// const openMapInBrowser = async (pickUp: string, dropOff: string) => {
	// 	const URL = `https://www.google.com/maps/dir/${pickUp}/${dropOff}`;
	// 	try {
	// 		await Linking.openURL(URL);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

  const openLinkMapInBrowser = async (item) => {
    const pickUp = concatCityState(item?.pickup?.address);
    const dropOff = concatCityState(item?.drop_off?.address);
    const URL = `https://www.google.com/maps/dir/${pickUp}/${dropOff}`;
    
    try {
      window.open(URL).focus();
    } catch (error) {
      console.log(error);
    }
  };
  
  const openSelectedMapInBrowser = useCallback(() => {
    openLinkMapInBrowser(itemRow);
    
  },[itemRow])
  const selectedRow = (index, item) => {
    setIndexRow(index)
    setItemRow(item)

  }
  return (
    <>
      <TableBody>
        {data?.items?.map((item, index) => (
          <TDRow
            key={index}
            color={index === indexRow ? "#4066d4": 'whitesmoke'}
            onClick={() => selectedRow(index, item)}
          >
            <TD>{roundUpTwoDigits(item.age)}</TD>
            <TD>{concatCityState(item.pickup.address)}</TD>
            <TD>{roundUpTwoDigits(item.pickup.deadhead)}</TD>
            <TD>{convertDateToDateFormat(item.pickup.date_local)}</TD>
            <TD>{concatCityState(item.drop_off.address)}</TD>
            <TD>{item.distance_total}mi</TD>
            <TD>{convertTrailertoInitial(item.equipment)}</TD>
            <TD>{addDecimalNumber(item.weight)}</TD>
            <TDCLick onClick={() => openLinkMapInBrowser(item)}>Map</TDCLick>
            <TD>{item.broker.company || "N/A"}</TD>
            <TD>{item.is_new || "Unlock"}</TD>
            <TD>{item.is_new || "Unlock"}</TD>
            <TD>{item.price_total}USD</TD>
          </TDRow>
        ))}
      </TableBody>
      <BtnOpenMap disabled={indexRow > 0 ? false : true} onClick={openSelectedMapInBrowser}>Open Map</BtnOpenMap>
    </>
  );
};
const TDRow = styled.tr`
  background-color: ${(props) => props.color};
    cursor: pointer;

`;
const TDCLick = styled.td`
  width: 120px;
  text-align: center;
  color: #ffff;
  background-color:#4066d4;
  cursor: pointer;
`;
const BtnOpenMap = styled.button`
  position: fixed;
  height: 50px;
  width: 120px;
  background-color: #4066d4;
  color: #ffffff;
  z-index: 999;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  color: white;
`;
export default TableRowData;
