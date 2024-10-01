define({"76":{y:0,u:"../admin-portal/cloud-account-management.htm",l:-1,t:"Cloud Account Management",i:0.00156802407869423,a:"Before you can start using Commander to manage and provision your organization\u0027s cloud resources, you must configure access to your cloud accounts. In Commander, cloud accounts refer to any of the following: Amazon Web Services account Google Cloud Platform account Kubernetes cluster Microsoft Azure ..."},"77":{y:0,u:"../admin-portal/manage-aws.htm",l:-1,t:"Amazon Web Services",i:0.00203891311059773,a:"This topic explains how to get started with managing your Amazon Web Services (AWS) resources with Commander. Get started with AWS Create an AWS account for Commander to have programmatic access to AWS.  Commander uses your account to connect to AWS. All of the private AMIs (Amazon Machine Images) ..."},"78":{y:0,u:"../admin-portal/add-aws-cloud-accounts.htm",l:-1,t:"Add AWS Cloud Accounts",i:0.00699321803103264,a:"To manage your Amazon Web Services (AWS) account\u0027s resources in Commander, add the cloud account by specifying which method to connect to it. The following methods are available: Add AWS cloud accounts using static credentials Add AWS cloud accounts using an IAM role and instance profile Add AWS ..."},"79":{y:0,u:"../admin-portal/aws_billing_data.htm",l:-1,t:"AWS Billing Data",i:0.00144206177666571,a:"You can configure Commander to retrieve AWS billing data. Retrieving billing data improves the accuracy of cost analytics and costing reports, which include metered usage costs such as Storage and Network I/O. After you configure the AWS report location, billing data is retrieved immediately and a ..."},"80":{y:0,u:"../admin-portal/setup-billing-retrieval-in-AWS.htm",l:-1,t:"Set Up Billing Retrieval in AWS",i:0.00632425984810849,a:"Before you set up Commander to retrieve billing records from AWS, you must have an Amazon S3 bucket with the required permissions and  an AWS billing report with the applicable settings. To enable Commander to retrieve billing data from AWS, do the following in the AWS Management Console: Create an ..."},"81":{y:0,u:"../admin-portal/retrieve-AWS-billing-data.htm",l:-1,t:"Retrieve AWS Billing Data",i:0.00657425437979355,a:"You can retrieve AWS billing data for the following account types: Payer account Linked account GovCloud account Important: To retrieve AWS billing data, you must have an Amazon S3 bucket with the required permissions and  an AWS billing report with the applicable settings. For more information, see ..."},"82":{y:0,u:"../admin-portal/manage-key-pairs-for-aws-regions.htm",l:-1,t:"Manage Key Pairs for AWS Regions",i:0.00193692507859011,a:"Key pairs are required to connect to certain Amazon EC2 Linux instances. This topic explains how to manage key pairs for an AWS region. Commander also allows you to manage key pairs through the use of key pair credentials. A key pair credential allows you to associate key pairs with users, groups ..."},"83":{y:0,u:"../admin-portal/supported-aws-resources.htm",l:-1,t:"Supported AWS Resources ",i:0.00054563697548706,a:"Supported AWS Resources You can manage the following AWS resources in Commander."},"84":{y:0,u:"../admin-portal/manage-google-cloud-platform.htm",l:-1,t:"Google Cloud Platform",i:0.00560675921543823,a:"This topic explains how to get started with Google Cloud Platform (GCP) in Commander. Getting started with GCP To manage your GCP resources with Commander, the following configuration is required: Create a service account for Commander to have programmatic access to GCP.\n For more information, see  ..."},"85":{y:0,u:"../admin-portal/add-gcp-cloud-accounts.htm",l:-1,t:"Add GCP Cloud Accounts",i:0.00164561301794555,a:"To manage your Google Cloud Platform (GCP) service account\u0027s resources in Commander, add the service account as a cloud account. To do so, provide the private key for the service account. If you want to update the private key for a GCP service account, see  Update the Private Key for GCP Service ..."},"86":{y:0,u:"../admin-portal/gcp-billing-subaccounts.htm",l:-1,t:"GCP Billing Subaccounts for Resellers",i:0.000804941576932828,a:"A service account is the object that gets added to Commander as a Cloud Account. For more information on creating service accounts, see  Create a service account for Commander to access GCP . In the Google Cloud Console, you can create service accounts to group your customer\u0027s project resources. If ..."},"87":{y:0,u:"../admin-portal/retrieve-billing-data-gcp.htm",l:-1,t:"Retrieve GCP Billing Data",i:0.00320760052599278,a:"You can configure Commander to retrieve Google Cloud Platform billing data. Retrieving billing data provides information for the  Cloud Billing Report  and  Cost Analytics . As well as general usage costs, these reports include metered usage costs such as Storage and Network I/O. Any credits in the ..."},"88":{y:0,u:"../admin-portal/update-private-key-gcp.htm",l:-1,t:"Update the Private Key for GCP Service Accounts",i:0.00095157462319216,a:"When you add a GCP cloud account, you use a private key for a GCP service account. If you need to delete this private key in GCP for security reasons, you can download a new key and update the GCP cloud account with the new key. In the GCP console, download a new private key for the service account ..."},"89":{y:0,u:"../admin-portal/supported-gcp-resources.htm",l:-1,t:"Supported GCP Resources",i:0.00054563697548706,a:"Supported GCP Resources You can manage the following GCP resources in Commander."},"90":{y:0,u:"../admin-portal/managing-kubernetes.htm",l:-1,t:"Kubernetes",i:0.000605833668621141,a:"Kubernetes (also known as K8s) is an open-source container-orchestration system for automating the deployment, scaling and management of containerized applications. Commander interacts with the Kubernetes API, providing distribution-independent management, governance, and visibility for Kubernetes ..."},"91":{y:0,u:"../admin-portal/adding-kubernetes-cloud-accounts.htm",l:-1,t:"Add Kubernetes Cloud Accounts",i:0.000518419042852623,a:"You can add a deployed Kubernetes cluster to Commander’s inventory as a cloud account.  To add a Kubernetes cluster to Commander as a cloud account, a Kubernetes configuration file (known as a kubeconfig file) is required for the cluster. Commander will encrypt this file and store it in the ..."},"92":{y:0,u:"../admin-portal/managing-linkage-kubernetes-clusters.htm",l:-1,t:"Manage Kubernetes Cluster Infrastructure Linkages",i:0.000945473825567742,a:" If Commander is also managing the cloud infrastructure where the cluster resides, Commander automatically links Kubernetes nodes to the underlying VMs.  For Commander to manage the cloud infrastructure where the cluster resides, the vCenter, AWS, Azure, or GCP cloud must be added to Commander as a ..."},"93":{y:0,u:"../admin-portal/azure.htm",l:-1,t:"Microsoft Azure",i:0.00237082429851083,a:"This topic explains how to get started with Azure in the Commander Admin Portal. Getting started with Azure To manage your Azure resources with the Admin Portal: Create a Microsoft Azure account.  Commander uses your account to connect to Azure. Create an Azure subscription.  You do this in the ..."},"94":{y:0,u:"../admin-portal/add-azure-cloud-accounts.htm",l:-1,t:"Add Azure Cloud Accounts",i:0.00188823467819905,a:"To manage your Azure subscription\u0027s resources in Commander, add the subscription as a cloud account. If an Azure account has multiple subscriptions, add each subscription as a separate cloud account.  Important: See  Getting started with Azure  for a list of tasks to complete before adding an Azure ..."},"95":{y:0,u:"../admin-portal/arm_billing_data.htm",l:-1,t:"Retrieve Azure Billing Data",i:0.00225269111450129,a:"You can configure Commander to retrieve Azure billing data. Retrieving billing data improves the accuracy of  costing reports  and  Cost Analytics , because these reports include metered usage costs such as Storage and Network I/O. Billing data is retrieved immediately after you configure the ..."},"96":{y:0,u:"../admin-portal/supported-azure-resources.htm",l:-1,t:"Supported Azure Resources",i:0.000621051183212789,a:"Supported Azure Resources You can manage the following Azure resources in Commander."},"97":{y:0,u:"../admin-portal/microsoft-scvmm.htm",l:-1,t:"Microsoft SCVMM",i:0.00150132959742546,a:"This topic explains how to get started with SCVMM in Commander. Getting started To manage a SCVMM cloud account with Commander: Record the IP address or the host name.  Create an administrative account in the SCVMM management server.  The cloud account must have full administrative access to ..."},"98":{y:0,u:"../admin-portal/adding-scvmm-cloud-accounts.htm",l:-1,t:"Adding Hyper-V SCVMM Cloud Accounts",i:0.00105350411721357,a:"Important: See  Getting started  for a list of tasks to complete before adding an SCVMM cloud account. To add an SCVMM cloud account: Select the root node of the inventory tree.  At the top of the Summary page, click Add Cloud Account. In the Add Cloud Account dialog, select Microsoft SCVMM from ..."},"99":{y:0,u:"../admin-portal/vmware-vcenter.htm",l:-1,t:"VMware vCenter",i:0.00126317605560112,a:"This topic explains how to get started with vCenter in Commander.  Getting started To manage a vCenter cloud account with Commander: Record the IP address or the host name. Create an administrative account in the vCenter Server system. The account must have full administrative access to retrieve ..."},"100":{y:0,u:"../admin-portal/adding-vcenter-cloud-accounts.htm",l:-1,t:"Adding vCenter Cloud Accounts",i:0.000773331895326745,a:"Important: See  Getting started  for a list of tasks to complete before adding a vCenter cloud account. To add a vCenter cloud account: Select the root node of the inventory tree.  At the top of the Summary page, click Add Cloud Account. In the Add Cloud Account dialog, select VMware Virtual Center ..."},"101":{y:0,u:"../admin-portal/retrieve_hist_info.htm",l:-1,t:"Retrieve Historical Data for vCenter Cloud Accounts",i:0.00267676989366547,a:"You can retrieve information about events that occurred in vCenter before the cloud account was added to Commander. Retrieving historical information can take a considerable amount of time to complete, especially on large cloud accounts (for example, a cloud account that has thousands of VMs) ..."},"102":{y:0,u:"../admin-portal/terraform.htm",l:-1,t:"Terraform",i:0.000877740159155117,a:"This topic explains how to get started with Terraform in Commander. After you\u0027ve performed the following steps, in the Admin Portal you\u0027ll be able to access the state of Terraform configurations stored in backends for Terraform Cloud, AWS S3 buckets, and Azure Blob Storage containers. You can also ..."},"103":{y:0,u:"../admin-portal/setup-storage-for-state-backends.htm",l:-1,t:"Set Up Storage for State Backends",i:0.000539774116336696,a:" To access the state of your Terraform configurations from a backend, configure the required permissions for each backend type as listed below. Terraform Cloud To access the state stored in a backend for Terraform Cloud, you must set up an organization with appropriate workspace permissions as ..."},"104":{y:0,u:"../admin-portal/add-storage-account-for-state-backends.htm",l:-1,t:"Add Storage Accounts for State Backends",i:0.000539774116336696,a:"You can connect to a backend to access the state of your Terraform configurations and view the inventory of deployed Terraform resources in Commander. To connect to a backend, add the storage account to Commander. You can add accounts for the following types of backends: Terraform Cloud: State is ..."},"105":{y:0,u:"../admin-portal/synchronize-state-backend.htm",l:-1,t:"Synchronize State Backends",i:0.000539774116336696,a:"Accounts are configured to keep Commander users up-to-date with resource changes performed by Terraform. To retrieve the latest snapshot of the deployed resources, you can manually synchronize with the state files for all of the backends that belong to the account or  for just for specific backends. ..."},"106":{y:0,u:"../admin-portal/custom-resources.htm",l:-1,t:"Custom resources",i:0.000457925135016788,a:"Custom resources are used to define and manage IT resources and services that are not associated with cloud accounts supported by Commander. This can include both virtual and physical objects such as VMs and services from unsupported cloud platforms, physical servers, network devices, and any ..."},"107":{y:0,u:"../admin-portal/proxy_config_public.htm",l:-1,t:"Connect Public Clouds through Web Proxy Servers",i:0.00293990797608495,a:"When managing public clouds, Commander must be able to reach the Internet. Therefore, additional configuration is required to integrate a web proxy server with Commander for connection to public clouds.   This topic covers connecting AWS, GCP, and Azure to Commander through a web proxy server. You ..."},"108":{y:0,u:"../admin-portal/synchronizing-inventory.htm",l:-1,t:"Synchronize Inventory",i:0.000775878610266043,a:"Commander automatically retrieves updates from cloud accounts to ensure that the inventory is synchronized. By default, updates from AWS, GCP, and Azure are retrieved every 60 minutes, while updates from Kubernetes are retrieved every 5 minutes. If you require more frequent updates, you can ..."},"109":{y:0,u:"../admin-portal/regions.htm",l:-1,t:"Select Regions for Public Clouds",i:0.00110534331481532,a:"You can select the regions that you want to display for public cloud accounts, and remove the regions that you don\u0027t use to improve usability for administrators and increase system performance.  For example, you can remove regions that don\u0027t contain any instances. The regions you remove are not ..."},"110":{y:0,u:"../admin-portal/troubleshooting-cloud-accounts.htm",l:-1,t:"Troubleshooting Cloud Accounts",i:0.000658008701267115,a:"Setting up email notification for cloud accounts To configure Commander to notify cloud account administrators when events occur: Click the Notifications tab. In the For Cloud Account Connection Issues section, click Add. In the Cloud Account Notifications dialog, enter the full user ID and click  . ..."},"111":{y:0,u:"../admin-portal/removing-cloud-accounts.htm",l:-1,t:"Remove Cloud Accounts",i:0.000415425528019211,a:"When you remove a cloud account, you aren\u0027t deleting files or records of any VMs, hosts, datacenters, clusters, or resource pools. You\u0027re removing the cloud account from Commander only. In standard operations, this task is used rarely or never. Effects of removing cloud accounts The following are ..."},"112":{y:0,u:"../admin-portal/user_mgmt.htm",l:-1,t:"User Identity and Access",i:0.000447526924773758,a:"This section covers user authentication, access control, and multi-tenancy. User authentication Commander is fully integrated with AD/LDAP so that you can leverage your existing group hierarchies. It also provides single-sign-on (SSO) with SAML2. For more information, see  User Authentication . ..."},"113":{y:0,u:"../admin-portal/user-authentication.htm",l:-1,t:"User Authentication",i:0.000431964740794422,a:"User Authentication This section covers the following topics:  Integrate Active Directory with Commander Integrate LDAP with Commander View User Account Details Change User Authentication Settings Configure SAML SSO"},"114":{y:0,u:"../admin-portal/directory_services.htm",l:-1,t:"Integrate Active Directory with Commander",i:0.00471467007717854,a:"Snow Commander can leverage an existing Active Directory (AD) server to provide multi-tenant role-based access control (RBAC) for different departments or organizations. Integrating Commander with directory services is optional. If you don\u0027t use Active Directory or LDAP, you can set up local user ..."},"115":{y:0,u:"../admin-portal/integrate_ldap.htm",l:-1,t:"Integrate LDAP with Commander",i:0.00466740407513241,a:"Commander can leverage an existing LDAP directory to provide multi-tenant RBAC for different departments or organizations. Integrating Commander with directory services is optional. If you don\u0027t use Active Directory or LDAP, you can set up local user accounts directly in Commander. For information, ..."},"116":{y:0,u:"../admin-portal/account_details.htm",l:-1,t:"View User Account Details",i:0.00325575895066101,a:"Commander provides account details that you can use to troubleshoot access and permission issues. For example, you can look up users to make sure they will have access to the Service Portal through their AD group membership. If a user doesn\u0027t exist as an individual Commander user or an individual ..."},"117":{y:0,u:"../admin-portal/change_session_timeout_display_format.htm",l:-1,t:"Change User Authentication Settings",i:0.000724917137007313,a:"This topic shows you how to change user sign in preferences, session timeout settings and how user names are displayed in the banner for logged-in users. Change sign in preferences for all users You can limit the number of unsuccessful sign in attempts permitted before a user account is temporarily ..."},"118":{y:0,u:"../admin-portal/sso.htm",l:-1,t:"Configure SAML SSO",i:0.00103301069147106,a:"Single sign-on (SSO) allows Commander and Service Portal users to authenticate once before accessing multiple service provider resources, including Commander and the Service Portal. How it works Commander uses the SAML 2.0 Web Browser SSO profile to provide single sign-on. Security Assertion Markup ..."},"119":{y:0,u:"../admin-portal/access-control.htm",l:-1,t:"Access Control",i:0.000431964740794422,a:"This section  covers the following topics:  Commander Access Control Commander Roles and Permissions Add User and Group Accounts and Assigning Roles Assign Access Rights to Administrative Users Examples of Administrative User Account Configuration Customize Service Portal Roles for Users"},"120":{y:0,u:"../admin-portal/understanding-access-control.htm",l:-1,t:"Commander Access Control",i:0.000740051513452189,a:"Commander provides role-based access control, which allows you to ensure that: Administrators have the right level of access to the various parts of your virtual infrastructure. Data for the various groups of users that consume your IT services is appropriately segregated. Commander has both an ..."},"121":{y:0,u:"../admin-portal/overview_vcommander_roles.htm",l:-1,t:"Commander Roles and Permissions",i:0.0105677692914241,a:"A Commander role is a set of permissions that determine what users can do in the Admin Portal console and what tasks they can carry out. The Commander roles are explained below so that you can decide how to assign them to users. See  Add User and Group Accounts and Assigning Roles  to learn how to ..."},"122":{y:0,u:"../admin-portal/adding-user-group-accounts-roles.htm",l:-1,t:"Add User and Group Accounts and Assigning Roles",i:0.0161772497841416,a:"This topic explains how to add a user or group account and assign a Commander role. It also shows how to edit, disable, and delete user accounts of both Admin Portal and Service Portal users. For information on adding Service Portal users, see  Create Organizations  instead. Add user or group ..."},"123":{y:0,u:"../admin-portal/access_rights.htm",l:-1,t:"Assign Access Rights to Administrative Users",i:0.00932895521673591,a:"After you have added administrative users with Commander roles,  assign access rights to your cloud infrastructure. You can assign access rights to: Restrict which parts of your cloud infrastructure that each administrative user can access. Allow administrative users to carry out a specific set of ..."},"124":{y:0,u:"../admin-portal/examples_for_account_configuration.htm",l:-1,t:"Examples of Administrative User Account Configuration",i:0.00273895867319188,a:"The following provides an example of how to assign Commander roles and access rights to administrative users in a large organization and in a small organization. Example: Setting up administrative user accounts for a large organization In this example, the organization contains more than three ..."},"125":{y:0,u:"../admin-portal/understand_service_portal_roles_permissions.htm",l:-1,t:"Customize Service Portal Roles for Users",i:0.0106595816657294,a:"Service Portal roles provide end users with access to the Service Portal, and they provide the set of permissions that determine what users can see and do in the Service Portal. To learn how to assign Service Portal roles to end users or edit and delete Service Portal roles, see  Create ..."},"126":{y:0,u:"../admin-portal/multi-tenancy-section.htm",l:-1,t:"Organizations and Multi-Tenancy",i:0.000431964740794422,a:"Whether you\u0027re a service provider or an enterprise with multiple stakeholders, you need to segregate data for the various groups of users that consume your IT services. Data segregation provides enhanced security, easier management and cost savings.  This section provides an overview of how you can ..."},"127":{y:0,u:"../admin-portal/multi_tenancy.htm",l:-1,t:"Using Commander in Multi-Tenant Environments",i:0.00131099293625292,a:"Multi-tenancy is the principal technology that clouds use to share IT resources cost effectively and securely. An apartment building is a useful analogy. Many tenants in an apartment building share the common infrastructure of the building, but walls and doors give them privacy from other tenants. ..."},"128":{y:0,u:"../admin-portal/organizations.htm",l:-1,t:"Create Organizations",i:0.0101057776281593,a:"Organizations form the basis of the Commander multi-tenant model. An organization is a group of consumers with a common business purpose. For more information, see  Using Commander in Multi-Tenant Environments . Organizations allow you to: Ensure that consumer groups can access only the resources ..."},"129":{y:0,u:"../admin-portal/org_walkthrough.htm",l:-1,t:"Walk-Through: Configuring Organizations",i:0.00263535562029523,a:"This topic walks through the creation of two organizations in an enterprise lab management environment, each with its own customized cloud automation configuration. See also the following topics: Using Commander in Multi-Tenant Environments  — Provides a high-level view of this process. Create ..."},"130":{y:0,u:"../admin-portal/quotas.htm",l:-1,t:"Set Organization Quotas",i:0.00350121083071595,a:"Quotas allow you to limit the compute resources or limit the daily costs for an organization so that you can assign available resources to your consumer groups based on their business requirements. Before you configure quotas, you must decide the following: Will you set a global quota for the entire ..."},"131":{y:0,u:"../admin-portal/quota-per-destination.htm",l:-1,t:"Configure Per-Destination Quotas for Organizations",i:0.00223446380191682,a:"You can configure distinct quota limits for each deployment destination available to a user or organization. For example, for a single organization, you can set distinct resource quota limits for each destination. Or, you can set a cost quota for the Production destination, a resource quota for ..."},"132":{y:0,u:"../admin-portal/quota-resource.htm",l:-1,t:"Configure a Global Resource Quota for Organizations",i:0.000787448407405183,a:"You can set a resource quota for an existing organization. After you configure a Global Resource Quota for your organizations, you should set up a quota-based approval process. For more information, see  Configure a Quota-Based Service Request Approval Process . Click the Organizations tab. On the ..."},"133":{y:0,u:"../admin-portal/quota-cost.htm",l:-1,t:"Configure Global Cost Quotas for Organizations",i:0.000787448407405183,a:"You can set a global daily cost quota for an organization. You can also set daily cost limits for individual organization members. Once quota is configured, organization managers can view quota usage information in the Service Portal. See also  Configure Per-Destination Quotas for Organizations . On ..."},"134":{y:0,u:"../admin-portal/organizations_approval.htm",l:-1,t:"Configure a Quota-Based Service Request Approval Process",i:0.0035937517928103,a:"Once you\u0027ve set quotas for an organization, you can create an approval workflow that allows you to automatically approve or reject requests based on an organization\u0027s available quota. Approval workflows are triggered when service requests are made by users. You can create a separate approval ..."},"135":{y:0,u:"../admin-portal/allocate_costs.htm",l:-1,t:"Shared Cost Allocation",i:0.00100246389195205,a:"You can allocate service costs to multiple organizations that share VMs or VM templates.  To allocate service costs, you must set the allocation percentage for each organization. The percentages allocated to each organization are not reflected in the VM costs shown in Commander;  the total cost of ..."},"136":{y:0,u:"../admin-portal/multi_role.htm",l:-1,t:"Multiple Roles and Membership in Organizations",i:0.000968267545654016,a:"Because each organization has distinct service ownership and configuration, organization membership affects what each user can see and do in the Service Portal. Typically, each user is a member of a single organization. However, there are  more complex scenarios that may be configured. A user can: ..."},"137":{y:0,u:"../admin-portal/using-parent-organizations.htm",l:-1,t:"Using Parent Organizations",i:0.00380234158814156,a:"You can optionally set up your multi-tenant environment with an organizational hierarchy that uses parent organizations at the top level and has regular organizations grouped as children under those parent organizations. Although organizations do not have to be associated with parent organizations, ..."},"138":{y:0,u:"../admin-portal/manage_requests_newvms.htm",l:-1,t:"Self-Service",i:0.000566651955114433,a:"Self-service provisioning and management allows users to view and manage cloud resources, including the ability to request new VMs and instances or request changes to existing services. Using the web-based  Service Portal , virtual infrastructure administrators can provide users with an ..."},"139":{y:0,u:"../admin-portal/make_service_available.htm",l:-1,t:"Catalog",i:0.00824581790730763,a:"Commander uses a service catalog to make services available for your users to request and to publish services that can be deployed on multiple clouds. A service is a container for IT assets that can be requested, approved, deployed, and completed as a unit. A service can consist of anything from a ..."},"140":{y:0,u:"../admin-portal/catalog-multi-cloud.htm",l:-1,t:"Add Multi-Cloud Services to the Catalog",i:0.00218357630224324,a:"With multi-cloud templates, you can create a single service that can be deployed on multiple datacenters, as well as multiple private, public, or hybrid clouds. Here are some examples of services that you can publish using multi-cloud templates: a service that can be deployed on vCenter, SCVMM, AWS, ..."},"141":{y:0,u:"../admin-portal/convert-services-to-multi-cloud.htm",l:-1,t:"Create Multi-Cloud Service Catalogs from Existing Services",i:0.000683266541645059,a:"To make it easier to add multi-cloud functionality to your existing service catalog, you can: Copy existing services into a new multi-cloud service in the catalog .\n             Copy existing services into an existing multi-cloud service in the catalog .\n             You may want to create a  ..."},"142":{y:0,u:"../admin-portal/catalog_ec2.htm",l:-1,t:"Add AWS Services to the Catalog",i:0.00451121668697817,a:"AWS published services can include private AMIs, Amazon Marketplace AMIs, CloudFormation templates, and  custom components . While you can add custom components to any type of service, it\u0027s not possible to add private AMIs, Amazon Marketplace AMIs, and CloudFormation templates to the same published ..."},"143":{y:0,u:"../admin-portal/creating-marketplace-favorites-list.htm",l:-1,t:"Customize Favorite Amazon Marketplace AMIs",i:0.00177125315407413,a:"You can add Amazon Marketplace AMIs (Amazon Machine Images) to the service catalog. To make it easier to find the AMIs that your organization uses most frequently, you can create a list of favorites. Only the latest version of each AMI will be available for you to select from the Favorites list. ..."},"144":{y:0,u:"../admin-portal/changing-refresh-period-for-marketplace-amis.htm",l:-1,t:"Change the Refresh Period for Marketplace AMIs",i:0.000917292812070169,a:"By default, Commander checks for updates to the list of Amazon Machine Images (AMIs) from AWS Marketplace every 72 hours. When a refresh occurs, Marketplace AMIs are updated for all regions.  When you change the refresh period, Commander forces an immediate refresh. You might need to refresh if:   ..."},"145":{y:0,u:"../admin-portal/aws_cf.htm",l:-1,t:"Manage AWS CloudFormation Templates and Stacks",i:0.00144029415322371,a:"CloudFormation simplifies provisioning and management on AWS. You can create templates for the service or application architectures you want and have AWS CloudFormation use those templates for quick and reliable provisioning of services or applications (called stacks). By adding a CloudFormation ..."},"146":{y:0,u:"../admin-portal/userdata.htm",l:-1,t:"AWS User Data Syntax and Supported Variables",i:0.00228243156737397,a:"User data allows you to configure an AWS VM during provisioning, or to run a configuration script on a VM. User data allows you to, for example: Customize the deployed VM\u0027s host name during provisioning. Run scripts after the VM starts and perform common automated configuration tasks. Enable ..."},});