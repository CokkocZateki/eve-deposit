import { createSelector } from 'reselect'

const getTypeFilter = (state, props) => state.oreTypeFilter
const getOreList = (state, props) => props.oreList
const getMineralList = (state, props) => props.mineralList


export const filterOreListByType = createSelector(
  [ getOreList, getTypeFilter ],
  (oreList, typeFilter) => {
    var filteredOre = oreList.filter(function(oreItem){
     
        return oreItem.type == typeFilter;
    });

    return filteredOre;
  }
)


export const filterMineralListByType = createSelector(
  [ getMineralList, getTypeFilter ],
  (mineralList, typeFilter) => {
    var filteredOre = mineralList.filter(function(mineralItem){
     
        return mineralItem.type == typeFilter;
    });

    return filteredOre;
  }
)
