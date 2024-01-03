import {create} from "zustand";

const  useStore = create(()=>({
    BrandList:[],
    CategoryList:[],
    SliderList:[],
    ListByBrand:[],
    ListByCategory:[],
    ListBySimiller:[],
    ListByKeyword:[],
    ListByRemark:[],
    Details:[],
    ReviewList:[],
}))