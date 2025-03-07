This is how to set up your target groups with your load balancer in order to make api calls between ec2 instances:

1. The following video explains how to set up a load balancer, target groups and path based traffic routing. https://www.youtube.com/watch?v=1ebFlcig0Fc

2. For a load balancer to make requests to an ec2 instance, the ec2 instance needs to be accociated to a target group.

3. Next step is to add a listener rule to your load balancer that will route traffic based on the url path.

4. When creating the CI/CD pipeline runnners, make sure to give each runner a unique label.  Use that label in the run-on: section of the client and server yml's.  
