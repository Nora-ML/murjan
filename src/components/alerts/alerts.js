import React from "react";
import "./alerts.scss";

export const Success = ({ message }) => {
	return (
		<div className="form_alerts">
			<p className="alerts alert_success">{message}</p>
		</div>
	);
};
export const Fail = ({ message }) => {
	return (
		<div className="form_alerts">
			<p className="alerts alert_fail">{message}</p>
		</div>
	);
};
