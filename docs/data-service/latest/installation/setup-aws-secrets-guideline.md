---
id: setup-aws-secrets-guideline
title: "Setup AWS Secrets Guideline"
sidebar_label: "Setup AWS Secrets Guideline"
sidebar_position: 5
description: "Setup AWS Secrets Guideline documentation."
displayed_sidebar: dataServiceSidebar
---
# Setup AWS Secrets Guideline 

## **1. Introduction**

This document will guide you on how to setup aws secrets for data service.

## **2. Config**

![1776046792188-824.png](/static/img/9eab26_1776046792188-824.png)

Open the bootstrap.yml file:Update the configuration as follows:

![1776046872552-583.png](/static/img/55e952_1776046872552-583.png)

To enable the use of AWS Secrets

**Region:** Your AWS region

**With AWS Secrets Manager:**

**Key**: /prod/akabot/dataservice

**Setup:**

**Prefix**: /prod/akabot

**default-context:** dataservice

## **3. Role**

Case 1: Using IAM Role (Recommended)

When the application is running on an EC2 instance, ECS task, or any environment with an attached IAM Role that has permission to access AWS Secrets Manager, no extra configuration is needed.

The service will start normally using the IAM Role credentials.

Case 2: Using AWS Access Key & Secret Key

Linux:

If you need to run the service using AWS Access Key and Secret Key instead of IAM Role, add to service the akabotdata.service file.

[Service]

Environment="AWS\_ACCESS\_KEY\_ID=your-access-key"

Environment="AWS\_SECRET\_ACCESS\_KEY=your-secret-key"

Environment="AWS\_REGION=ap-southeast-1"

Windowns:

Update param to file : win-install.bat

## **4. Using parameters**

Using a normal environment variable: `${param}`

![1776047326889-829.png](/static/img/a746bd_1776047326889-829.png)

The password is retrieved from AWS Secrets Manager; the password is the Secret value.