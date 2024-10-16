﻿define({"211":{y:0,u:"../admin-portal/cloning_vms.htm",l:-1,t:"Manually Provision vCenter Services",i:0.00125553327981014,a:"You can manually provision vCenter services in the following ways: Deploy a requested service, VM or virtual service: Click Deploy at the appropriate level of the tree in the  Request Details  dialog. Note that once a component in a service has been deployed, it\u0027s no longer possible to deploy at the ..."},"212":{y:0,u:"../admin-portal/customize_vm.htm",l:-1,t:"Manually Customize VMs",i:0.000608390481268546,a:"Using Commander, you can customize the configuration and network settings of a vCenter VM so that it can begin to operate immediately in your virtualized infrastructure. You can also customize an SCVMM VM, but only the host name is customizable. It\u0027s possible to customize VMs using workflow steps. ..."},"213":{y:0,u:"../admin-portal/media_library.htm",l:-1,t:"Create a Media Library",i:0.00188356647050035,a:"Service Portal and Commander users can upload ISO and FLP files to a organization-specific media library and to global media folders, depending on the their permissions. Users can then connect these files to vCenter VMs with CD drives.  For example, if a user wants to install antivirus software on a ..."},"214":{y:0,u:"../admin-portal/manage_connected_media.htm",l:-1,t:"Connect Media to vCenter VMs",i:0.00073737704829921,a:"In Commander, you can connect datastore files, host devices and client devices to a VM\u0027s virtual hardware, such as a CD/DVD drive or floppy drive. Note that you can\u0027t add virtual hardware devices to a VM. To connect media files to a VM\u0027s virtual hardware device, the datastore where the media file is ..."},"215":{y:0,u:"../admin-portal/vm-sharing.htm",l:-1,t:"VM Sharing",i:0.00198222120027185,a:"You can share exact copies of your vCenter VMs with other users and groups. This can be useful, for example, if you discover a defect with an application during testing. In this case,  to speed up the resolution of the defect, you could share your exact VM configuration with all the users in your ..."},"216":{y:0,u:"../admin-portal/share-vcenter-vms.htm",l:-1,t:"Share vCenter VMs",i:0.000457480107939062,a:"You can share exact copies of your vCenter VMs with other users and groups. VM sharing is supported only for vCenter VMs. For more information, see  VM Sharing . Click the Virtual Machines tab. Select a vCenter VM in the tree or in a table and select Actions \u003e Provisioning \u003e Share VM. In the Share ..."},"217":{y:0,u:"../admin-portal/request-shared-vcenter-vms.htm",l:-1,t:"Request Shared vCenter VMs",i:0.000580928738252071,a:"You can share exact copies of your vCenter VMs with other users and groups. This can be useful, for example, if you discover a defect with an application during testing. In this case, to speed up the resolution of the defect, you could share your exact VM configuration with all the users in your ..."},"218":{y:0,u:"../admin-portal/delete_vm_from_disk.htm",l:-1,t:"Delete Deployed Services",i:0.00259270139486972,a:"When you delete a service, you\u0027re removing all of its associated resources (such as backing files). Deleting a service is permanent. If a service accesses data on multiple datastores, all the referenced files are deleted. If a file (such as a virtual disk file) that\u0027s used by more than one service ..."},"219":{y:0,u:"../admin-portal/migrate_vcenter.htm",l:-1,t:"Migrate vCenter VMs",i:0.000643021777309123,a:"Commander allows you to migrate VMs to other locations in the same vCenter cloud account, to help optimize VM placement within your virtual infrastructure. You can migrate a VM to another folder, host, resource pool, or datastore, or to another host and datastore. Commander provides capacity ..."},"220":{y:0,u:"../admin-portal/vm_lifecycle_mgmt.htm",l:-1,t:"Lifecycle and Policy Management",i:0.000527309462449474,a:"Commander\u0027s robust policy engine automates service lifecycle management, ensuring that the resources deployed by services, such as VMs and instances, are decommissioned within set time limits. Flexible notification and expiry extension options ensure that users are well informed and able to keep ..."},"221":{y:0,u:"../admin-portal/power_sched.htm",l:-1,t:"Configure VM Power Schedules",i:0.00460312948508368,a:"You can automatically power VMs on and off at specified times using power schedules. Power schedules are especially useful for the public cloud, where you pay more when VMs are running. But private cloud VMs that are running unnecessarily consume resources as well. It\u0027s still possible to manually ..."},"222":{y:0,u:"../admin-portal/power_sched_recs.htm",l:-1,t:"Power Schedule Recommendations",i:0.00115729164278082,a:"Power schedule groups help to ensure that VMs are powered on when needed and powered off when not needed, to minimize cost without hindering productivity. Commander issues power schedule recommendations for VMs. By default, power schedule recommendations are issued for VMs that: Don\u0027t belong to a ..."},"223":{y:0,u:"../admin-portal/controlling_infra_with_policies.htm",l:-1,t:"Manage Policies",i:0.00525973570188142,a:"Commander policies ensure that you have control over your virtual infrastructure and costs. The policies that you can configure in Commander are: Expiry Policy : Identify and control services based on an expiry date, allowing you to ensure that you\u0027re not paying for unused services. Default ..."},"224":{y:0,u:"../admin-portal/resource-and-service-ownership.htm",l:-1,t:"Resource and Service Ownership",i:0.00354139321596111,a:"Deployed resources and virtual services can be owned by one or more individual users and/or groups (either local accounts set up in Commander or directory service accounts). They can also be owned by organizations. When deployed resources and virtual services are deployed as part of a requested ..."},"225":{y:0,u:"../admin-portal/set-resource-ownership.htm",l:-1,t:"Set Resource Ownership",i:0.00245167794447748,a:"In the Admin Portal, you can select a single resource or virtual service and set the ownership for that resource or virtual service to an organization or to one or more users or groups.  The ownership that\u0027s set for AWS stacks, GCP deployments, or Azure Resource Groups is also set for all of the ..."},"226":{y:0,u:"../admin-portal/set-resource-ownership-with-policies.htm",l:-1,t:"Set Resource Ownership with Policies",i:0.00233809561099631,a:"You can use a Default Ownership policy to automatically assign ownership to resources and virtual services associated with services that are: Created through automated and manual deployments. Created outside of Commander (that is, created directly in the cloud account or managed Kubernetes cluster). ..."},"227":{y:0,u:"../admin-portal/set-terraform-resource-ownership.htm",l:-1,t:"Set Terraform Resource Ownership",i:0.00084691752582109,a:"You can set which organizations and users you want to be the owners of Terraform backends. This allows Service Portal users to see backends and their infrastructure resources, along with the configurations for those resources. Assigned ownership of backends also allows Service Portal users and ..."},"228":{y:0,u:"../admin-portal/manage-service-expirations.htm",l:-1,t:"Manage Service Expirations",i:0.00229113819235518,a:"You should ensure that all of your services have a specific expiry date or are set never to expire, as appropriate. This allows you to avoid paying for unneeded services while ensuring that critical services are never decommissioned. Services and templates can have the following expiry states: Never ..."},"229":{y:0,u:"../admin-portal/setting_expired_vm_policy.htm",l:-1,t:"Manage Expired Services Through Policies",i:0.00856477910142214,a:"An Expiry Policy allows you to identify and control services based on their expiry date, to ensure that you\u0027re not paying for unused services. For example, you can automatically decommission expired services. Set up steps The steps to setting up an Expiry Policy are:  Set expiry information for ..."},"230":{y:0,u:"../admin-portal/vm_snapshot.htm",l:-1,t:"Manage VM Snapshots",i:0.000481070505243503,a:"A snapshot preserves the state of a VM so that you can return to that state any time you want without creating multiple VMs. Use a snapshot as a restoration point during a linear or iterative process (for example, installing update packages) or during a branching process (for example, installing ..."},"231":{y:0,u:"../admin-portal/quarantine_vms.htm",l:-1,t:"Quarantine VMs",i:0.000481070505243503,a:"When a VM should no longer be able to communicate with the rest of the network, it can be placed into quarantine. Once a VM is quarantined, its network interfaces are disconnected and it can\u0027t connect to any network until the quarantine has been cleared. Even if a user reconfigures the VM so that ..."},"232":{y:0,u:"../admin-portal/set_default_attributes_policy.htm",l:-1,t:"Automatically Assign Attributes to New Services",i:0.00216978122172325,a:"You can use the Default Attributes policy to automatically assign metadata to new services. This policy can help you reduce the administrative time required to set metadata used for orchestration. The Default Attributes policy can automatically assign the following metadata to new services: expiry ..."},"233":{y:0,u:"../admin-portal/receiving_emails_about_policy.htm",l:-1,t:"Subscribe to Policy Alerts",i:0.00527260021691396,a:"You can choose to receive an email when a policy action is taken by Commander (or unsubscribe) for the following policies:\n         Tag compliance End of Life Expiry Suspect Unapproved You only receive one email with all policy actions that occurred in the last three-minute period, regardless of the ..."},"234":{y:0,u:"../admin-portal/comparing-vms.htm",l:-1,t:"Compare VMs",i:0.000836651484523824,a:"You can select and compare two VMs (including templates) to determine the differences between them. You can also compare the changes that have occurred on a single VM between two different dates (the \"drift\"). Commander tracks the parent-child relationships of inventoried VMs and templates for AWS, ..."},"235":{y:0,u:"../admin-portal/rename_infra_element.htm",l:-1,t:"Rename Infrastructure Elements",i:0.000481070505243503,a:"Use Commander to rename an infrastructure element including:\n         folders\n             datacenters\n             datastores\n             datastore clusters\n             clusters\n             resource pools\n             VMs\n             virtual services\n             Select the infrastructure ..."},"236":{y:0,u:"../admin-portal/unapproved_policy.htm",l:-1,t:"Manage Unapproved VMs",i:0.000977847294083819,a:"Any new VM that\u0027s managed by Commander is, by default, unapproved (unless Commander has been configured to automatically set the approval states of VMs, as described later in this topic). You have the option of marking a VM as approved and then changing that status back to unapproved at any time. ..."},"237":{y:0,u:"../admin-portal/end_of_life_policy.htm",l:-1,t:"Manage End-of-Life VMs",i:0.00226896833490641,a:"You can mark a service as being in an End of Life state if you want to keep it for forensic or archival purposes and you don\u0027t want to delete it from your inventory. If you configure the End of Life policy as detailed in this topic, any time you clone or deploy a service from a service that\u0027s marked ..."},"238":{y:0,u:"../admin-portal/suspect_policy.htm",l:-1,t:"Manage Suspect VMs",i:0.000977847294083819,a:"A suspect VM is a VM that doesn\u0027t meet the operating standards for your environment. You can set the suspect state of a VM to display at-a-glance information only or to work with the Suspect Policy by setting that policy to trigger an action when an attempt to start a Suspect service is made. For ..."},"239":{y:0,u:"../admin-portal/optimize.htm",l:-1,t:"Resource Capacity and Performance",i:0.00049283118946606,a:"You can use Commander to effectively monitor the capacity of your virtual infrastructure and reclaim any wasted resources. You can also use it to monitor and address the performance of your resources. Capacity and waste reclamation Commander predicts and identifies constraining resources so that you ..."},"240":{y:0,u:"../admin-portal/set_storage_tier.htm",l:-1,t:"Set Storage Tiers",i:0.0034980961920368,a:"To reduce data storage costs, you can assign a storage tier to datastores or datastore clusters. Datastores — When you set a storage tier for a datastore, the tier is also assigned to the datastore\u0027s actual location on disk (which is displayed as the Location property for a datastore). You can\u0027t ..."},"241":{y:0,u:"../admin-portal/configure_capacity.htm",l:-1,t:"Manage Host and Cluster Capacity",i:0.00338785406642469,a:"You can establish where and how many VMs you can place on a cluster or host based on the amount of CPU, memory or storage capacity available. When you add a vCenter or SCVMM cloud account, Commander calculates the average VM workload and the resultant capacity for each cluster. This information is ..."},"242":{y:0,u:"../admin-portal/scanning_datastores.htm",l:-1,t:"Scan vCenter Datastores",i:0.00348217314800561,a:"You can scan your vCenter datastores to find VMs and templates that are out of inventory and to find other files. When a datastore scan discovers an out-of-inventory VM, best practice is to determine if the VM is being used, and if it is not, delete the VM from disk. For more information, see  ..."},"243":{y:0,u:"../admin-portal/manage_inventory.htm",l:-1,t:"Manage vCenter Inventory",i:0.00324318455001933,a:"Lost or out-of-inventory VMs, virtual services and unlinked or orphaned files can use up the storage available on your datastores. Lost and out-of-inventory VMs and virtual services are those that are still on disk but are not registered in the cloud account. This situation can occur when a VM or ..."},"244":{y:0,u:"../admin-portal/performance.htm",l:-1,t:"Monitor Performance of VMs, Hosts, Clusters",i:0.00537344971663859,a:"Using Commander, you can analyze how a VM, host, or cluster is performing and what issues may be affecting its performance. Performance metrics are retrieved from the cloud provider. By default, Commander gathers performance data from vCenter and SCVMM and can display metrics on the Performance tab ..."},"245":{y:0,u:"../admin-portal/monitoring-memory-metrics.htm",l:-1,t:"Monitor Memory Metrics for Public Cloud Instances",i:0.00316112831752941,a:"While public clouds provide CPU, network and disk usage metrics for VM instances, they don\u0027t provide memory usage metrics by default. Commander provides the ability to monitor memory usage for public cloud instances. When memory usage metrics are enabled for an instance: VM owners can  monitor ..."},"246":{y:0,u:"../admin-portal/aws_metrics_linux.htm",l:-1,t:"Monitor Memory Metrics for EC2 Linux Instances",i:0.00191541121363885,a:"While Amazon CloudWatch provides CPU, network and disk usage  metrics  for Amazon EC2 instances, it doesn\u0027t provide memory usage metrics by default. Commander provides the ability to monitor memory usage through the use of custom CloudWatch scripts. When memory usage metrics are enabled for an ..."},"247":{y:0,u:"../admin-portal/aws_metrics_win.htm",l:-1,t:"Monitor Memory Metrics for EC2 Windows Instances",i:0.00191541121363885,a:"While Amazon CloudWatch provides CPU, network and disk usage  metrics  for Amazon EC2 instances, it doesn\u0027t provide memory usage metrics by default. Commander provides the ability to monitor memory usage through the use of custom CloudWatch scripts. When memory usage metrics are enabled for an ..."},"248":{y:0,u:"../admin-portal/monitoring-memory-metrics-for-gcp-instances.htm",l:-1,t:"Monitor Memory Metrics for GCP Instances",i:0.000905328632556647,a:"While GCP provides CPU, network and disk usage  metrics  for instances, it doesn\u0027t provide memory usage metrics by default. For Commander to retrieve memory metrics for a GCP instance, the Stackdriver agent must be installed on the instance. To learn how to install the Stackdriver agent, see  ..."},"249":{y:0,u:"../admin-portal/memory-metrics-for-arm-linux.htm",l:-1,t:"Monitor Memory Metrics for Azure Instances",i:0.00116397714774268,a:"Commander provides the ability to monitor Azure memory usage. While Azure collects CPU, network and disk usage  metrics , it doesn\u0027t provide memory usage metrics by default. You can enable memory usage monitoring so that: VM owners can  monitor memory usage . Commander can issue memory  rightsizing ..."},"250":{y:0,u:"../admin-portal/rightsizing.htm",l:-1,t:"Rightsize VMs and Instances",i:0.0054327829546166,a:"Using VM data from the  cloud platform  (and optionally from  third-party performance monitoring tools ), Commander provides rightsizing recommendations for VMs and instances based on VM and guest OS performance data. Rightsizing means ensuring that all VMs in your virtualized infrastructure are ..."},"251":{y:0,u:"../admin-portal/rightsizing_config.htm",l:-1,t:"Configure Rules for VM Rightsizing",i:0.00194413044616782,a:"Commander uses a set of rules to generate rightsizing recommendations for a VM. You can customize these rules. You can also configure different rules for different workload types through rightsizing groups. For example, you can configure distinct rules for a database and a web server, or for ..."},"252":{y:0,u:"../admin-portal/perf_integration.htm",l:-1,t:"Integrate Splunk with CommanderManage Splunk Integrations",i:0.00269282716525111,a:"Integrate Splunk with Commander Manage Splunk Integrations Combining third-party guest OS performance data with VM performance metrics from the hypervisor allows Commander to provide more accurate rightsizing recommendations for your virtualized infrastructure—without burdening the Commander system ..."},"253":{y:0,u:"../admin-portal/optimize_splunk.htm",l:-1,t:"Optimize the VM Performance Query with Splunk",i:0.00278618711576445,a:"If you have  integrated with Splunk  to retrieve guest OS performance data, when Commander refreshes VM performance for a machine (either manually for a single VM, or automatically with the nightly performance update), Commander generates a query for the VM and sends it to Splunk to perform. This ..."},"254":{y:0,u:"../admin-portal/update_vm_resources.htm",l:-1,t:"Manually Reconfigure VM Resources",i:0.00122827052828223,a:"Depending on the cloud platform, reconfiguring VM resources could entail: Changing the amount of memory and the number of virtual processors assigned to a VM, or changing the instance type. Adding or deleting network adapters. Adding, changing, or removing storage. There are three ways to ..."},"255":{y:0,u:"../admin-portal/costing.htm",l:-1,t:"Cloud Expense Management",i:0.0019334861237131,a:"Commander’s cloud cost management capabilities provide cost visibility and cloud cost comparisons. Commander tracks virtual asset costs in real time and provides effective IT chargeback or showback that you can act on. It also provides built-in cost calculation and simple-to-use wizard-based cost ..."},"256":{y:0,u:"../admin-portal/cost-analytics.htm",l:-1,t:"Cost Analytics",i:0.00282496579213324,a:"Cost Analytics allow you to see the cost of all services across all cloud accounts, providing you with the data you need to make informed cloud cost decisions. Costs include both the costs for VMs and other services that are managed by Commander and the costs for resources and services that aren\u0027t ..."},"257":{y:0,u:"../admin-portal/setting-up-cost-analytics.htm",l:-1,t:"Set Up Cost Analytics",i:0.00245115254081709,a:"To use Commander cost analytics, carry out the following tasks: Configure the Default Ownership policy, so that ownership is applied to costs. See  Cost analytics and ownership  below. For public clouds, you must retrieve billing data in order to see cost analytics. See  AWS ,  Azure , and  GCP  for ..."},"258":{y:0,u:"../admin-portal/viewing-cost-analytics.htm",l:-1,t:"Cost Analytics Charts and Tables",i:0.00334817549579173,a:"Cost Analytics can show: Daily Cost , showing detailed historical costs\n             Month-to-Date Cost , showing cost increases and decreases over time\n             Most Expensive Cloud Accounts Most Expensive Organizations Most Expensive Services Recommendations and Savings  for costs For ..."},"259":{y:0,u:"../admin-portal/daily-costs.htm",l:-1,t:"Daily Cost",i:0.000742088290153138,a:"The Daily Cost chart and tables help you understand the day-to-day differences in your costs. To see Cost Analytics for public cloud billing data, you must have billing retrieval turned on. When unfiltered, the default Daily Cost chart shows a summary of your total costs for the previous 60 days, so ..."},"260":{y:0,u:"../admin-portal/month-to-date-costs.htm",l:-1,t:"Month-to-Date Cost",i:0.000742088290153138,a:"The Month-to-date Cost chart and table help you to predict what your total costs will be at the end of the month. They also help you to understand if your costs are growing over the previous month, and give you a chance to intervene if this is unexpected. Click the  Table icon to see the table view ..."},"261":{y:0,u:"../admin-portal/most-expensive-cloud-accounts.htm",l:-1,t:"Most Expensive Cloud Accounts",i:0.000742088290153138,a:"The Most Expensive Cloud Accounts chart shows the cost of VMs and other services aggregated over the past 30 days.  Use the Most Expensive Cloud Accounts chart to see which cloud accounts are the most expensive and take appropriate action to reduce costs. If the cost of one cloud account doesn\u0027t ..."},"262":{y:0,u:"../admin-portal/most-expensive-organizations.htm",l:-1,t:"Most Expensive Organizations",i:0.000742088290153138,a:"Use the Most Expensive Organizations information to see which organizations are the top spenders. When unfiltered, the Most Expensive Organizations table and chart show the cost of all VMs and other services aggregated over the past 30 days under specific organizations, in order of cost. Click the  ..."},"263":{y:0,u:"../admin-portal/most-expensive-items.htm",l:-1,t:"Most Expensive Services",i:0.00127449911997858,a:"You can use the Most Expensive Services table to see the most expensive services in the past 30 days. You can change the table settings to show the following:  VMs: Shows the most expensive VMs. In addition, you can also see VMs that have downsizing ( ) or upsizing ( ) recommendations. You can ..."},"264":{y:0,u:"../admin-portal/recommendations-savings.htm",l:-1,t:"Recommendations and Savings",i:0.000742088290153138,a:"Using VM performance data, Commander issues rightsizing recommendations for VMs so you can adjust the CPU, memory, and instance type to optimize performance of your VMs and avoid wasting resources. The Recommendations and Savings table and chart show  how to reduce costs by running your system more ..."},"265":{y:0,u:"../admin-portal/cost-analytics-permissions-sp.htm",l:-1,t:"Set Cost Dashboard Permissions for Service Portal Roles",i:0.00312808322100858,a:"To allow Service Portal users to view the Cost Dashboard for services they own, assign the following permissions: Show Cost Dashboard Show All Organization Services  View Cloud Account Details Set Cost Dashboard visibility If you\u0027ve implemented the  Cost Adjustments  feature to apply markups and ..."},"266":{y:0,u:"../admin-portal/troubleshooting-cost-analytics.htm",l:-1,t:"Troubleshooting Cost Analytics",i:0.00501072249216584,a:"If you don’t see the costs you expect to see, or if no costs are visible, use the suggestions in this list to troubleshoot your setup. Make sure all cost analytics prerequisites are fulfilled. See  Set Up Cost Analytics . For public clouds you must have billing retrieval configured to display costs ..."},"267":{y:0,u:"../admin-portal/cost_of_vm.htm",l:-1,t:"Service Costs",i:0.00238105136460332,a:"The following costs are displayed for services:  Estimated cost: The estimated cost of a service is calculated on an annual basis by adding the storage costs, operating system costs, support costs, and custom attribute costs to the cost of the allocated or reserved resources for the service. To ..."},"268":{y:0,u:"../admin-portal/cost-models.htm",l:-1,t:"Cost Models",i:0.00431299975393917,a:"Cost models control projected costs displayed throughout Commander, such as service catalog costs and deployed VM costs. Cost models are also used to help generate historical information in reports that can assist you in managing your virtual infrastructure resources. A cost model contains distinct ..."},"269":{y:0,u:"../admin-portal/cost_models.htm",l:-1,t:"Configure Cost Models",i:0.0126415844329521,a:"Cost models control projected costs displayed throughout Commander, such as service catalog costs and deployed VM costs. Cost models are also used to help generate historical information in reports that can assist you in managing your virtual infrastructure resources. For more information, see  Cost ..."},"270":{y:0,u:"../admin-portal/calculating-public-cloud-costs.htm",l:-1,t:"Calculate Projected Public Cloud Costs",i:0.00323577697347559,a:"The following table provides links to pricing information for each public cloud vendor. For vendors with multiple pricing models, the table explains which pricing model Commander uses to project public cloud costs. Commander projected public cloud costs include the following: The various instance ..."},"271":{y:0,u:"../admin-portal/system_costs.htm",l:-1,t:"Cost Configuration",i:0.00678696551066547,a:"Global costs are costs that affect all  cloud accounts. You can configure the following global cost settings: Set the default currency Custom attribute costs Storage tiers To configure costs for specific parts of your infrastructure, see  Configure Cost Models . Set the default currency Costs in ..."},"272":{y:0,u:"../admin-portal/cost_attributes.htm",l:-1,t:"Calculate Custom Costs",i:0.00238048925682295,a:"Commander allows you to use formulas to create custom cost calculations. List-type custom attributes are used to apply these cost calculations. When you add a custom cost attribute to a cost model and then assign a value for the attribute to a VM, template, or virtual service covered by that cost ..."},"273":{y:0,u:"../admin-portal/recommendations.htm",l:-1,t:"Manage Recommendations",i:0.00152434771180205,a:"Commander generates some recommendations and retrieves others from AWS to help you optimize VM performance and minimize cost. The following types of recommendations are available: Rightsizing recommendations Power schedule recommendations Reserved Instance recommendations To view all ..."},"274":{y:0,u:"../admin-portal/ri_rec_config.htm",l:-1,t:"Manage Reserved Instance Recommendations",i:0.00122610246283513,a:"Commander retrieves recommendations to purchase EC2 Reserved Instances (RIs) from AWS. Purchasing RIs provides a significant discount compared with paying for on-demand pricing. Based on your Amazon EC2 instance uptime, Commander retrieves and displays potential EC2 RI purchases for each region and ..."},"275":{y:0,u:"../admin-portal/cloud-software-license-costs.htm",l:-1,t:"Cloud Software License Costs",i:0.0010366241186428,a:"You can use Commander to determine whether your deployed Azure VMs, AWS EC2 instances, and Azure SQL database instances are configured so that they can make use of Windows Server or SQL Server license entitlements that you already have. When you compare the licensing information Commander provides ..."},"276":{y:0,u:"../admin-portal/searching-for-software-licensing-info.htm",l:-1,t:"Search for software licensing information",i:0.000677765958998147,a:"You can perform advanced searches on VM configuration and operational details that will provide cloud software licensing information used by Azure VMs and AWS EC2 instances with your search (for example, for Azure VMs, whether the Azure Hybrid Benefit is enabled, and for AWS EC2 instances, the ..."},"277":{y:0,u:"../admin-portal/enabling-azure-hybrid-benefits.htm",l:-1,t:"Enable Azure Hybrid Benefits",i:0.0010915643907336,a:"From Commander, you can set the Azure Hybrid Benefit for your Azure VMs running Windows Server or Azure SQL databases. Applying the Azure Hybrid Benefit for your Windows Server or Azure SQL databases can save software licensing fees when you have existing license entitlements  Windows Server or ..."},"278":{y:0,u:"../admin-portal/cloud-governance.htm",l:-1,t:"Cloud Governance",i:0.000527309462449474,a:"Commander\u0027s cloud governance capabilities cover the follow primary areas: Discovery and monitoring of cloud resources Tag and label enforcement Instance type control Lifecycle automation Change request orchestration Discovery and monitoring of cloud resources Often engineering teams spin up small ..."},"279":{y:0,u:"../admin-portal/tag-and-label-enforcement.htm",l:-1,t:"Tag and Label Enforcement",i:0.0012538746863322,a:"Ensuring that all members of your organization, from developers to IT, follow corporate standards is a critical part of proper cloud governance. With cloud tag synchronization and tag compliance policy, you can certify that all your instances and VMs follow best practices. In the Cloud Direct model, ..."},"280":{y:0,u:"../admin-portal/custom-attributes.htm",l:-1,t:"Add Infrastructure Metadata with Custom Attributes",i:0.00259394548849982,a:"You can use custom attributes to provide more management information about your cloud infrastructure. For example, you can design custom attributes that enable users to apply budget or profit center code information for VMs or asset numbers for infrastructure elements. You can configure some custom ..."},});