import { Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './Menu.css';
import { useNavigate } from 'react-router-dom'

function AppMenu() {

    const nagigate = useNavigate();

    const onMenuClick = (item) => {
        nagigate(`/${item.key}`)
    }

    return (
        <div className="appMenu">

            <Menu
                style={{ color:"black", background:"lightpink"}}
                onClick={onMenuClick}
                mode="horizontal"
                items={[
                    {
                        label: <HomeFilled />,
                        key: "app/home",
                    },
                    {
                        label:"Cadastros",
                        key: "cadastros",
                        children:[
                            {
                                label: "Estados",
                                key: "app/cadestados"
                            },
                            {
                                label: "Men's Shoes",
                                key: "mens-shoes"
                            },
                            {
                                label: "Men's Watches",
                                key: "mens-watches"
                            },
                        ]
                    },
                    {
                        label:"Mulher",
                        key: "mulher",
                        children:[
                            {
                                label: "Women's Shirts",
                                key: "women-shirts"
                            },
                            {
                                label: "Women's Shoes",
                                key: "women-shoes"
                            },
                            {
                                label: "Women's Watches",
                                key: "women-watches"
                            },
                            {
                                label: "Women's Bags",
                                key: "women-bags"
                            },
                        ]
                    },
                    {
                        label:"Produtos",
                        key: "app/products",
                    },
                    {
                        label:"Clientes",
                        key: "app/cliente",
                    }
                ]}
            />

        </div>
    );
}

export default AppMenu;
