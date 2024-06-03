import { ConfigProvider, Flex } from "antd";
import zhCN from "antd/locale/zh_CN";
import clsx from "clsx";

const DefaultLayout = () => {
	const { pathname } = useLocation();

	return (
		<ConfigProvider locale={zhCN}>
			<Flex className="h-screen">
				<Flex
					vertical
					align="center"
					justify="space-between"
					className="h-full bg-2 pt-48 pb-32 transition w-68 color-2"
				>
					<Flex vertical gap="large">
						{routes[0].children?.map((item) => {
							const { path, meta } = item;

							const { title } = meta!;

							return (
								<Link
									key={title}
									to={path}
									className={clsx("hover:text-primary", {
										"text-primary": pathname === path,
									})}
								>
									<Flex vertical align="center" gap={4}>
										{/* <Icon name={icon} size={path === "/keyboard" ? 24 : 26} /> */}
										<span>{title}</span>
									</Flex>
								</Link>
							);
						})}
					</Flex>
					<div>主题</div>
				</Flex>

				<div className="h-full">
					<Outlet />
				</div>
			</Flex>
		</ConfigProvider>
	);
};

export default DefaultLayout;
