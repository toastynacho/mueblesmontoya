import React, { useState } from 'react';
import { FlexboxGrid, Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
    withRouter
  } from "react-router-dom";
import Pedidos from './Pedidos'
import NuevoPedido from './NuevoPedido'
function  Dashboard(props){  
    let [activeKey, setActiveKey] = useState()
    let {path, url} = useRouteMatch()
        return (
            <Router>
            <FlexboxGrid style={{height:"92vh"}}>
                <FlexboxGrid.Item colspan={4}>
                <Sidenav defaultOpenKeys={['3', '4']} activeKey={activeKey} style={{height:"92vh", maxHeight:"100%", minHeight:"100%"}}>
                    <Sidenav.Body>
                        <Nav>
                        <div style={{padding:"10px", height:"7vh", fontSize:"20px", backgroundColor:"#002046", color:"white"}}>
                            {props.title}
                        </div>
                        <Dropdown eventKey="3" activeKey="1" title="Pedidos" icon={<Icon icon="edit" />}>
                        <Dropdown.Item eventKey="3-1" componentClass={Link} to={`${url}/hoy`} onClick={()=>setActiveKey("3-1")}>Pedidos de Hoy</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2" componentClass={Link} to={`${url}/pendientes`} onClick={()=>setActiveKey("3-2")}>Pedidos pendientes</Dropdown.Item>
                        <Dropdown.Item eventKey="3-3" componentClass={Link} to={`${url}/cambios`} onClick={()=>setActiveKey("3-3")}>Cambios</Dropdown.Item>
                        <Dropdown.Item eventKey="3-4" componentClass={Link} to={`${url}/entregados`} onClick={()=>setActiveKey("3-4")}>Entregados</Dropdown.Item>
                        <Dropdown.Item eventKey="3-5" componentClass={Link} to={`${url}/todos`} onClick={()=>setActiveKey("3-5")}>Todos</Dropdown.Item>
                        </Dropdown>
                        
                        </Nav>
                    </Sidenav.Body>
                    </Sidenav>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={20}>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={16} style={{height:"92vh"}}>
                            <Switch>
                                <Route exact path={`${url}`}>
                                <Pedidos key="verhoy"title={`de hoy ${props.title}`} db={props.db} filter={{
                                    field: 'fecha',
                                    value: new Date()
                                }}/>
                                </Route>
                                <Route path={`${url}/hoy`}>
                                <Pedidos key="verhoy"title={`de hoy ${props.title}`} db={props.db} filter={{
                                    field: 'fecha',
                                    value: new Date()
                                }}/>
                                </Route>
                                <Route path={`${url}/pendientes`}>
                                <Pedidos key="verpendientes" title={`de hoy ${props.title}`} db={props.db} filter={{
                                    field: 'estado',
                                    value: 'Pendiente'
                                }}/>
                                </Route>
                                <Route exact path={`${url}/cambios`}>
                                <Pedidos key="vercambios" title={`de hoy ${props.title}`} db={props.db} filter={{
                                    field: 'estado',
                                    value: 'Cambio'
                                }}/>
                                </Route>
                                <Route path={`${url}/entregados`}>
                                <Pedidos key="verentregados" title={`de hoy ${props.title}`} db={props.db} filter={{
                                    field: 'estado',
                                    value: 'Entregado'
                                }}/>
                                </Route>
                                <Route path={`${url}/todos`}>
                                <Pedidos key="vertodos" title={`de hoy ${props.title}`} db={props.db} />
                                </Route>
                            </Switch>
                        </FlexboxGrid.Item>
                        <NuevoPedido db={props.db}/>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            </Router> 
         );
    
}
 
export default withRouter(Dashboard);