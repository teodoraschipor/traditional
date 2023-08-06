import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { getRoutePath } from "./routes-utils"
import { TraditionalTvRoutesNames } from "./routes-names"
import Layout from "../components/Layout/Layout"
import Acasa from "../screens/Acasa/Acasa"
import Stiri from "../screens/Stiri/Stiri"
import Emisiuni from "../screens/Emisiuni/Emisiuni"
import TraditionaliDeSeama from "../screens/TraditionaliDeSeama/TraditionaliDeSeama"
import Contact from "../screens/Contact/Contact"
import Live from "../screens/Live/Live"
import Echipa from "../screens/Echipa/Echipa"
import DespreComunitate from "../screens/DespreComunitate/DespreComunitate"
import Confidentialitate from "../screens/Confidentialitate/Confidentialitate"
import TermeniConditii from "../screens/TermeniConditii/TermeniConditii"
import Informatii from "../screens/Informatii/Informatii"
import CodConduita from "../screens/CodConduita/CodConduita"
import Stire from "../screens/Stire/Stire"

export const AppRouter = () => {
    return(
        <BrowserRouter basename="/">
            <div className="app">
                <Routes>
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.ACASA)} 
                    element={
                        <Layout>
                            <Acasa />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.STIRI)} 
                    element={
                        <Layout>
                            <Stiri />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.EMISIUNI)} 
                    element={
                        <Layout>
                            <Emisiuni />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.TRADITIONALIDESEAMA)} 
                    element={
                        <Layout>
                            <TraditionaliDeSeama />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.CONTACT)} 
                    element={
                        <Layout>
                            <Contact />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.LIVE)} 
                    element={
                        <Layout>
                            <Live />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.ECHIPA)} 
                    element={
                        <Layout>
                            <Echipa />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.DESPRECOMUNITATE)} 
                    element={
                        <Layout>
                            <DespreComunitate />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.CONFIDENTIALITATE)} 
                    element={
                        <Layout>
                            <Confidentialitate />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.TERMENICONDITII)} 
                    element={
                        <Layout>
                            <TermeniConditii />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.INFORMMATII)} 
                    element={
                        <Layout>
                            <Informatii />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.CODCONDUITA)} 
                    element={
                        <Layout>
                            <CodConduita />
                        </Layout>} />
                    <Route 
                    path={getRoutePath(TraditionalTvRoutesNames.STIRIITEM)} 
                    element={
                        <Layout>
                            <Stire />
                        </Layout>} />
                    {/* default redirection to home page */}
                    <Route
                    path="*"
                    element={
                    <Navigate
                        to={getRoutePath(
                        TraditionalTvRoutesNames.ACASA
                        )}
                    />
                    }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}