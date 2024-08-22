package com.web.xs.resume.builder.Resume_Builder.dto;

public class UserDTO {

	 	private String userName;
	    private String password;
	    private boolean active;
	    private String roles;
	    private String email;
		private String firstName;
		private String lastName;
		private long mobileNumber;
	    
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public boolean isActive() {
			return active;
		}
		public void setActive(boolean active) {
			this.active = active;
		}
		public String getRoles() {
			return roles;
		}
		public void setRoles(String roles) {
			this.roles = roles;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public long getMobileNumber() {
			return mobileNumber;
		}
		public void setMobileNumber(long mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
	    
	    
}
