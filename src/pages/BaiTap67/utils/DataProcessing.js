// ------------------TieredMenu---------------------

export const DataCategories_TieredMenu = (data) => {
    return data.flatMap(item => 
        item.course_category_level1_w_course_category_level2.map(subItem => ({
            titleCategory: subItem.course_category_level1.name,
            contentTile: subItem.name
        }))
    );
};

export const GroupedData_TiredMenu = (dataCategories) => {
    return dataCategories.reduce((acc, item) => {
        if (!acc[item.titleCategory]) {
            acc[item.titleCategory] = [];
        }
        acc[item.titleCategory].push(item.contentTile);
        return acc;
    }, {});
};

// ------------------DropDown---------------------

export const DataCategories_DropDown = (data) => {
    return data = data.flatMap(item => 
        item.blog_category_level1_w_blog_category_level2.map(subItem => ({
            titleCategory: subItem.blog_category_level1.name,
            contentTitle: subItem.name
        }))
    );
};

export const GroupedData_DropDown = (dataCategories) => {
    return dataCategories.reduce((acc, item) => {
        if (!acc[item.titleCategory]) {
            acc[item.titleCategory] = [];
        }
        acc[item.titleCategory].push({ label: item.contentTitle, value: item.contentTitle });
        return acc;
    }, {});
};