import { FILTER_TYPE } from "react-bootstrap-table2-filter/lib/src/const";

export default function getQueryFilters(filters) {
    const queryFilters = [];

    for (const dataField in filters) {
        const filter = filters[dataField];

        switch (filter.filterType) {
            case FILTER_TYPE.TEXT: {
                queryFilters.push({
                    columnName: dataField,
                    value: filter.filterVal,
                });
                break;
            }

            case FILTER_TYPE.SELECT: {
                queryFilters.push({
                    columnName: dataField,
                    value: filter.filterVal,
                });
                break;
            }

            case FILTER_TYPE.DATE: {
                const { date, comparator } = filter.filterVal;

                if (date && comparator) {
                    queryFilters.push({
                        columnName: dataField,
                        value: date,
                        comparator: comparator,
                    });
                }
                break;
            }

            case FILTER_TYPE.NUMBER: {
                const { number, comparator } = filter.filterVal;

                if (number && comparator) {
                    queryFilters.push({
                        columnName: dataField,
                        value: number,
                        comparator: comparator,
                    });
                }
                break;
            }

            default:
                break;
        }
    }

    return queryFilters;
};