json.data do
  json.id @user.id
  json.email @user.email

  if @user.errors.empty?
    json.jwt_token JWTWrapper.encode({ user_id: @user.id })
  else
    json.errors @user.errors
  end
end
