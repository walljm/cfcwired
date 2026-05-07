<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

    <asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

        <main>

            <!-- Page Title -->
            <Rock:PageIcon ID="PageIcon" runat="server" />
            <h1 class="pagetitle">
                <Rock:PageTitle ID="PageTitle" runat="server" />
            </h1>

            <Rock:PageBreadCrumbs ID="PageBreadCrumbs" runat="server" />
            
            <!-- Start Content Area -->
            
            <!-- Ajax Error -->
            <div class="container">
                <div class="alert alert-danger ajax-error no-index" style="display:none">
                    <p><strong>Error</strong></p>
                    <span class="ajax-error-message"></span>
                </div>
            </div>

            <Rock:Zone Name="MainContent" runat="server" />

            <!-- End Content Area -->

        </main>

    </asp:Content>